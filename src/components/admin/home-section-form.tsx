'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button' // eslint-disable-line
import { Input } from '@/components/ui/input' // eslint-disable-line
import { Label } from '@/components/ui/label' // eslint-disable-line
import { Select } from '@/components/ui/select' // eslint-disable-line
import { SelectContent } from '@/components/ui/select' // eslint-disable-line
import { SelectItem } from '@/components/ui/select' // eslint-disable-line
import { SelectTrigger } from '@/components/ui/select' // eslint-disable-line
import { SelectValue } from '@/components/ui/select' // eslint-disable-line
import { Textarea } from '@/components/ui/textarea' // eslint-disable-line
import { Switch } from '@/components/ui/switch' // eslint-disable-line
import { Card, CardContent } from '@/components/ui/card' // eslint-disable-line
import { createSection, updateSection } from '@/app/admin/home/actions' // eslint-disable-line
import { ImageUpload } from '@/components/admin/image-upload' // eslint-disable-line
import { Trash, Plus, ArrowUpRight } from 'lucide-react' // eslint-disable-line
import { DynamicIcon } from '@/components/ui/dynamic-icon' // eslint-disable-line
import { TooltipSimple } from '@/components/ui/tooltip-simple'


interface HomeSectionFormProps {
    initialData?: {
        id?: string
        type: string
        isActive: boolean
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        content: any
    }
    isEditing?: boolean
    category?: 'HOME' | 'ABOUT'
}

export function HomeSectionForm({ initialData, isEditing = false, category = 'HOME' }: HomeSectionFormProps) {
    const [type, setType] = useState(initialData?.type || (category === 'HOME' ? 'HERO' : 'ABOUT_HERO'))
    // State for local updates
    const [content, setContent] = useState(initialData?.content || {})

    // Feature Items State Logic
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [featureItems, setFeatureItems] = useState<any[]>(() => {
        const items = initialData?.content?.items
        if (Array.isArray(items)) return items
        // Special case for modular array fields: timeline, values, team
        if (category === 'ABOUT') {
            if (initialData?.content?.timeline) return initialData.content.timeline
            if (initialData?.content?.values) return initialData.content.values
            if (initialData?.content?.team) return initialData.content.team
        }

        if (typeof items === 'string') {
            try {
                return JSON.parse(items)
            } catch {
                return items.split(',').map(t => ({ title: t.trim(), description: '', link: '#', icon: 'Sparkles' }))
            }
        }
        return []
    })

    const [newFeature, setNewFeature] = useState<{
        title: string
        description: string
        link: string
        icon: string
        image: string
        role: string
        year: string
        value: string
        label: string
        linkedin: string // Added for team
    }>({
        title: '',
        description: '',
        link: '',
        icon: 'Sparkles',
        image: '',
        role: '',
        year: '',
        value: '',
        label: '',
        linkedin: ''
    })

    const AVAILABLE_ICONS = [
        'Sparkles', 'Code2', 'Zap', 'Layout', 'Smartphone', 'Globe',
        'Shield', 'Users', 'BarChart', 'Mail', 'Settings', 'Crown'
    ]

    const addFeature = () => {
        // Validation based on type
        if (type === 'ABOUT_TEAM' && !newFeature.title) return // Name is in title
        if (type === 'ABOUT_TIMELINE' && !newFeature.year) return
        if (!newFeature.title && type !== 'ABOUT_TIMELINE') return

        setFeatureItems([...featureItems, newFeature])
        setNewFeature({ title: '', description: '', link: '', icon: 'Sparkles', image: '', role: '', year: '', value: '', label: '', linkedin: '' })
    }

    const removeFeature = (index: number) => {
        setFeatureItems(featureItems.filter((_, i) => i !== index))
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateContent = (key: string, value: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setContent((prev: any) => ({ ...prev, [key]: value }))
    }

    const SECTION_TYPES = category === 'HOME' ? [
        { value: 'HERO', label: 'Hero Section' },
        { value: 'TECH_STACK', label: 'Tech Stack / Logos' },
        { value: 'FEATURES', label: 'Features Grid' },
        { value: 'BLOG_FEED', label: 'Latest Blog Posts' },
        { value: 'PROJECT_FEED', label: 'Featured Projects' },

        { value: 'CTA', label: 'Call to Action' },
        { value: 'LOGOS', label: 'Logos / Trust' },
        { value: 'SERVICES', label: 'Services (Nexus)' },
        { value: 'SHOWCASE', label: 'Showcase / Portfolio' },
        { value: 'TESTIMONIALS', label: 'Testimonials' },
        { value: 'PRICING', label: 'Pricing' },
        { value: 'FAQ', label: 'FAQ / Help' },
        { value: 'CONTACT', label: 'Contact' },
    ] : [
        { value: 'ABOUT_HERO', label: 'About Hero' },
        { value: 'ABOUT_STATS', label: 'About Stats' },
        { value: 'ABOUT_TIMELINE', label: 'About Timeline' },
        { value: 'ABOUT_VALUES', label: 'About Values' },
        { value: 'ABOUT_TEAM', label: 'About Team' },
    ]

    const NEXUS_TYPES = ['SERVICES', 'LOGOS', 'SHOWCASE', 'TESTIMONIALS', 'PRICING', 'FAQ', 'CONTACT', 'ABOUT_VALUES', 'ABOUT_TIMELINE', 'ABOUT_STATS', 'ABOUT_TEAM']
    const isNexus = NEXUS_TYPES.includes(type)

    return (
        <form action={isEditing ? updateSection.bind(null, initialData!.id!) : createSection} className="space-y-8">
            <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="type">Tipo de Sección</Label>
                        <Select name="type" value={type} onValueChange={setType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                {SECTION_TYPES.map((t) => (
                                    <SelectItem key={t.value} value={t.value}>
                                        {t.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2 flex flex-col justify-end pb-2">
                        <div className="flex items-center space-x-2">
                            <Switch id="isActive" name="isActive" defaultChecked={initialData?.isActive ?? true} />
                            <Label htmlFor="isActive">Activa (Visible)</Label>
                        </div>
                    </div>
                </div>

                <Card>
                    <CardContent className="pt-6 space-y-4">
                        {/* DYNAMIC FIELDS BASED ON TYPE */}

                        {(type === 'HERO' || type === 'ABOUT_HERO') && (
                            <>
                                <input type="hidden" name="content_variant" value="BUSINESS" />
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <Label>Título Principal (Headline)</Label>
                                        <TooltipSimple text="El texto grande principal. Puedes usar HTML como <br /> para saltos de línea." />
                                    </div>
                                    <Input name="content_headline" defaultValue={content.headline} placeholder="ej. Construyendo el Futuro" required />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <Label>Subtítulo</Label>
                                        <TooltipSimple text="Texto descriptivo debajo del título. Ideal para tu cargo o slogan corto." />
                                    </div>
                                    <Input name="content_subheadline" defaultValue={content.subheadline} placeholder="ej. Desarrollador Full Stack & Entusiasta de IA" />
                                </div>

                                <div className="grid grid-cols-2 gap-4 border-t pt-4 border-b pb-4 my-4">
                                    <div className="space-y-2">
                                        <div className="space-y-2">
                                            <Label className="font-semibold text-primary">1. Imagen de Fondo</Label>
                                            <ImageUpload
                                                value={content.imageUrl}
                                                onChange={(url) => updateContent('imageUrl', url)}
                                            />
                                            <input type="hidden" name="content_imageUrl" value={content.imageUrl || ''} />
                                            <p className="text-xs text-muted-foreground">Ocupa toda la pantalla de fondo.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="font-semibold text-primary">2. Imagen Frontal / Contenido</Label>
                                            <ImageUpload
                                                value={content.foregroundImageUrl}
                                                onChange={(url) => updateContent('foregroundImageUrl', url)}
                                            />
                                            <input type="hidden" name="content_foregroundImageUrl" value={content.foregroundImageUrl || ''} />
                                            <p className="text-xs text-muted-foreground">Dev: Imagen Terminal | Negocios: Foto lateral</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 border p-4 rounded-md bg-muted/30">
                                        <h4 className="font-semibold text-sm text-primary">Configuración Tarjeta Flotante (Solo Negocios)</h4>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center">
                                                    <Label>Nombre Ícono</Label>
                                                    <TooltipSimple text="Nombre del ícono de Lucide React (ej. Activity)." />
                                                </div>
                                                <Input name="content_cardIcon" defaultValue={content.cardIcon} placeholder="ej. Activity, Users..." />
                                                <p className="text-[10px] text-muted-foreground">
                                                    <a href="https://lucide.dev/icons" target="_blank" className="underline hover:text-primary">Galería Lucide</a>
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center">
                                                    <Label>Texto Etiqueta</Label>
                                                    <TooltipSimple text="Texto pequeño descripción en la tarjeta." />
                                                </div>
                                                <Input name="content_cardLabel" defaultValue={content.cardLabel} placeholder="ej. Crecimiento" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center">
                                                    <Label>Texto Valor</Label>
                                                    <TooltipSimple text="El número o valor principal resaltado." />
                                                </div>
                                                <Input name="content_cardValue" defaultValue={content.cardValue} placeholder="ej. +500%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <Label>Texto Badge</Label>
                                            <TooltipSimple text="Pequeña píldora de texto arriba del título." />
                                        </div>
                                        <Input name="content_badge" defaultValue={content.badge} placeholder="ej. Nuevo Lanzamiento" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Enlace Badge (Opcional)</Label>
                                        <Input name="content_badgeLink" defaultValue={content.badgeLink} placeholder="ej. /blog/mi-post" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Ícono Badge (Opcional)</Label>
                                        <Input name="content_badgeIcon" defaultValue={content.badgeIcon} placeholder="ej. Bell" />
                                    </div>
                                </div>


                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <Label>Texto Botón Principal</Label>
                                            <TooltipSimple text="El botón de acción más importante (CTA)." />
                                        </div>
                                        <Input name="content_ctaText" defaultValue={content.ctaText} placeholder="ej. Ver Proyectos" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Enlace Botón Principal</Label>
                                        <Input name="content_ctaLink" defaultValue={content.ctaLink} placeholder="ej. /projects" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Ícono Principal (Opcional)</Label>
                                        <Input name="content_ctaIcon" defaultValue={content.ctaIcon} placeholder="ej. Rocket" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <Label>Texto Botón Secundario</Label>
                                            <TooltipSimple text="Botón alternativo, usualmente transparente o borde." />
                                        </div>
                                        <Input name="content_secondaryCtaText" defaultValue={content.secondaryCtaText} placeholder="ej. Descargar CV" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Enlace Botón Secundario</Label>
                                        <Input name="content_secondaryCtaLink" defaultValue={content.secondaryCtaLink} placeholder="ej. /about" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Ícono Secundario (Opcional)</Label>
                                        <Input name="content_secondaryCtaIcon" defaultValue={content.secondaryCtaIcon} placeholder="ej. Sparkles" />
                                    </div>
                                    <input type="hidden" name="content_variant" value="A" />
                                </div>
                            </>
                        )}

                        {(type !== 'HERO' && type !== 'ABOUT_HERO' && type !== 'FEATURES' && type !== 'TECH_STACK' && type !== 'BLOG_FEED' && type !== 'PROJECT_FEED' && type !== 'CTA') && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Título / Headline</Label>
                                    <Input name="content_headline" defaultValue={content.headline || content.title} placeholder="Título de la sección" />
                                    {/* Fallback support for 'title' key if used by About previously */}
                                    <input type="hidden" name="content_title" value={content.headline || content.title} />
                                </div>

                                {type === 'ABOUT_STATS' && (
                                    <>
                                        <div className="space-y-4 border rounded-md p-4 bg-muted/20">
                                            <Label className="text-base font-semibold">Stats List</Label>
                                            <div className="grid gap-4">
                                                {featureItems.map((item, index) => (
                                                    <div key={index} className="flex items-center justify-between p-3 bg-background border rounded shadow-sm">
                                                        <div className="flex gap-4 items-center">
                                                            <div className="font-bold text-xl">{item.value}</div>
                                                            <div className="text-sm text-muted-foreground">{item.label}</div>
                                                        </div>
                                                        <Button type="button" variant="ghost" size="sm" onClick={() => removeFeature(index)}>
                                                            <Trash className="h-4 w-4 text-destructive" />
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex gap-2 items-end">
                                                <div className="space-y-2 flex-1">
                                                    <Label>Value</Label>
                                                    <Input placeholder="e.g. 50+" value={newFeature.value || ''} onChange={(e) => setNewFeature({ ...newFeature, value: e.target.value })} />
                                                </div>
                                                <div className="space-y-2 flex-1">
                                                    <Label>Label</Label>
                                                    <Input placeholder="e.g. Projects Completed" value={newFeature.label || ''} onChange={(e) => setNewFeature({ ...newFeature, label: e.target.value })} />
                                                </div>
                                                <Button type="button" onClick={() => {
                                                    if (!newFeature.label) return;
                                                    setFeatureItems([...featureItems, { ...newFeature }]);
                                                    setNewFeature({ ...newFeature, value: '', label: '' });
                                                }}>Add</Button>
                                            </div>
                                            <input type="hidden" name="content_stats" value={JSON.stringify(featureItems)} />
                                        </div>
                                    </>
                                )}

                                <div className="space-y-2">
                                    <Label>Subtítulo / Descripción</Label>
                                    <Textarea name="content_subheadline" defaultValue={content.subheadline || content.body} placeholder="Descripción corta o subtítulo..." />
                                    <input type="hidden" name="content_body" value={content.subheadline || content.body} />
                                </div>

                                {(type.startsWith('ABOUT') || type === 'CONTACT' || type === 'SHOWCASE') && (
                                    <div className="space-y-2">
                                        <Label>Primary Image</Label>
                                        <ImageUpload
                                            value={content.imageUrl}
                                            onChange={(url) => updateContent('imageUrl', url)}
                                        />
                                        <input type="hidden" name="content_imageUrl" value={content.imageUrl || ''} />
                                    </div>
                                )}

                                {/* Quote Fields for Testimonials B */}
                                {type === 'TESTIMONIALS' && content.variant === 'B' && (
                                    <div className="space-y-4 border-t pt-4">
                                        <Label className="text-primary">Quote Details</Label>
                                        <div className="space-y-2">
                                            <Input name="content_quote" defaultValue={content.quote} placeholder="The main quote text..." />
                                            <div className="grid grid-cols-2 gap-2">
                                                <Input name="content_author" defaultValue={content.author} placeholder="Author Name" />
                                                <Input name="content_role" defaultValue={content.role} placeholder="Author Role" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* LIST EDITOR REUSED FOR SERVICES, FAQ, TESTIMONIALS, SHOWCASE, AND ABOUT TYPES */}
                                {['SERVICES', 'FAQ', 'TESTIMONIALS', 'SHOWCASE', 'ABOUT_TIMELINE', 'ABOUT_VALUES', 'ABOUT_TEAM'].includes(type) && (
                                    <div className="space-y-4 border rounded-md p-4 bg-muted/20 mt-4">
                                        <Label className="text-base font-semibold">Content Items</Label>
                                        <p className="text-xs text-muted-foreground mb-4">Add individual items (Cards, Questions, Testimonials, Projects) for the selected variant.</p>

                                        <div className="grid gap-4">
                                            {featureItems.map((item, index) => (
                                                <div key={index} className="flex items-start justify-between p-3 bg-background border rounded shadow-sm">
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            {item.icon && <span className="text-xs bg-muted px-1 rounded">{item.icon}</span>}
                                                            <div className="font-bold">{item.title}</div>
                                                        </div>
                                                        <div className="text-sm text-muted-foreground">{item.description}</div>
                                                    </div>
                                                    <Button type="button" variant="ghost" size="sm" onClick={() => removeFeature(index)}>
                                                        <Trash className="h-4 w-4 text-destructive" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="space-y-3 pt-4 border-t">
                                            <div className="grid gap-2">
                                                <div className="flex gap-2">
                                                    <Input placeholder={type === 'ABOUT_TIMELINE' ? "Year (e.g. 2023)" : type === 'ABOUT_TEAM' ? "Name" : "Title / Question"} value={newFeature.title} onChange={(e) => setNewFeature({ ...newFeature, title: e.target.value })} />
                                                    {type !== 'ABOUT_TIMELINE' && (
                                                        <Input placeholder={type === 'ABOUT_TEAM' ? "Role" : "Icon (e.g. Code)"} value={type === 'ABOUT_TEAM' ? (newFeature.role || '') : newFeature.icon} onChange={(e) => setNewFeature({ ...newFeature, [type === 'ABOUT_TEAM' ? 'role' : 'icon']: e.target.value })} className="w-1/3" />
                                                    )}
                                                </div>
                                                <Textarea placeholder={type === 'ABOUT_TIMELINE' ? "Description" : type === 'ABOUT_TEAM' ? "Bio / Short Description" : "Description / Answer"} value={newFeature.description} onChange={(e) => setNewFeature({ ...newFeature, description: e.target.value })} />

                                                {type === 'ABOUT_TEAM' && (
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <Input placeholder="Image URL (use Upload below first)" value={newFeature.image || ''} onChange={(e) => setNewFeature({ ...newFeature, image: e.target.value })} />
                                                        <Input placeholder="LinkedIn URL" value={newFeature.linkedin || ''} onChange={(e) => setNewFeature({ ...newFeature, linkedin: e.target.value })} />
                                                    </div>
                                                )}

                                                <Button type="button" size="sm" onClick={addFeature} disabled={!newFeature.title} className="w-full">
                                                    <Plus className="h-4 w-4 mr-2" /> Add Item
                                                </Button>
                                            </div>
                                        </div>
                                        <input type="hidden" name={
                                            type === 'ABOUT_TIMELINE' ? 'content_timeline' :
                                                type === 'ABOUT_VALUES' ? 'content_values' :
                                                    type === 'ABOUT_TEAM' ? 'content_team' :
                                                        'content_items'
                                        } value={JSON.stringify(featureItems)} />
                                    </div>
                                )}
                            </div>
                        )}

                        {(type === 'BLOG_FEED' || type === 'PROJECT_FEED') && (
                            <>
                                <div className="space-y-2">
                                    <Label>Título de la Sección</Label>
                                    <Input name="content_title" defaultValue={content.title} placeholder="ej. Últimos Posts" required />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <Label>Cantidad a Mostrar</Label>
                                        <TooltipSimple text="Número de items (posts o proyectos) a mostrar." />
                                    </div>
                                    <Input type="number" name="content_count" defaultValue={content.count || 3} min={1} max={12} required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Descripción / Subtítulo</Label>
                                    <Input name="content_subtitle" defaultValue={content.subtitle} placeholder="Texto opcional debajo del título" />
                                </div>
                            </>
                        )}

                        {(type === 'FEATURES' || type === 'TECH_STACK') && (
                            <>
                                <div className="space-y-2">
                                    <Label>Título Principal</Label>
                                    <Input name="content_title" defaultValue={content.title} placeholder={type === 'TECH_STACK' ? "ej. Stack Tecnológico" : "ej. Nuestras Características"} required />
                                </div>
                                {type === 'TECH_STACK' ? (
                                    <div className="space-y-2">
                                        <Label>Subtítulo (Opcional)</Label>
                                        <Input name="content_subheadline" defaultValue={content.subheadline} placeholder="Texto pequeño arriba o abajo..." />
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <Label>Subtítulo</Label>
                                        <Textarea name="content_subheadline" defaultValue={content.subheadline} placeholder="Descripción de la sección..." />
                                    </div>
                                )}

                                <div className="space-y-4 border rounded-md p-4 bg-muted/20">
                                    <Label className="text-base font-semibold">{type === 'TECH_STACK' ? 'Technologies List' : 'Features List'}</Label>

                                    <div className="grid gap-4">
                                        {featureItems.map((item, index) => (
                                            <div key={index} className="flex items-start justify-between p-3 bg-background border rounded shadow-sm">
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        {item.icon && <span className="text-xs bg-muted px-1 rounded">{item.icon}</span>}
                                                        <div className="font-bold">{item.title}</div>
                                                    </div>
                                                    {type !== 'TECH_STACK' && <div className="text-sm text-muted-foreground">{item.description}</div>}
                                                    {item.link && <div className="text-xs text-primary mt-1">{item.link}</div>}
                                                </div>
                                                <Button type="button" variant="ghost" size="sm" onClick={() => removeFeature(index)}>
                                                    <Trash className="h-4 w-4 text-destructive" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-3 pt-4 border-t">
                                        <Label>Add New {type === 'TECH_STACK' ? 'Technology' : 'Feature'}</Label>

                                        {/* Icon Picker */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label className="text-xs text-muted-foreground">Select Icon</Label>
                                                <a
                                                    href="https://lucide.dev/icons"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-primary hover:underline flex items-center gap-1"
                                                >
                                                    Browse all icons <ArrowUpRight className="h-3 w-3" />
                                                </a>
                                            </div>

                                            <div className="flex gap-2">
                                                <Input
                                                    placeholder="Icon name (e.g. Activity)"
                                                    value={newFeature.icon}
                                                    onChange={(e) => setNewFeature({ ...newFeature, icon: e.target.value })}
                                                    className="h-9 font-mono text-xs"
                                                />
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {AVAILABLE_ICONS.map((iconName) => (
                                                    <button
                                                        key={iconName}
                                                        type="button"
                                                        onClick={() => setNewFeature({ ...newFeature, icon: iconName })}
                                                        className={`p-2 rounded-md border text-xs flex items-center gap-1 transition-colors ${newFeature.icon === iconName
                                                            ? 'bg-primary text-primary-foreground border-primary'
                                                            : 'bg-background hover:bg-muted'
                                                            }`}
                                                        title={iconName}
                                                    >
                                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                                        <DynamicIcon name={iconName as any} className="h-4 w-4" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <Input
                                            placeholder={type === 'TECH_STACK' ? "Technology Name (e.g. React)" : "Feature Title"}
                                            value={newFeature.title}
                                            onChange={(e) => setNewFeature({ ...newFeature, title: e.target.value })}
                                        />
                                        {type !== 'TECH_STACK' && (
                                            <Textarea
                                                placeholder="Feature Description"
                                                value={newFeature.description}
                                                onChange={(e) => setNewFeature({ ...newFeature, description: e.target.value })}
                                            />
                                        )}
                                        {type !== 'TECH_STACK' && (
                                             <Input
                                                placeholder="Link text (e.g. Learn more ->)"
                                                value={newFeature.link}
                                                onChange={(e) => setNewFeature({ ...newFeature, link: e.target.value })}
                                            />
                                        )}
                                        
                                        <Button type="button" size="sm" onClick={addFeature} disabled={!newFeature.title}>
                                            <Plus className="h-4 w-4 mr-2" /> Add {type === 'TECH_STACK' ? 'Tech' : 'Feature'}
                                        </Button>
                                    </div>

                                    {/* Serialize to hidden input for server action */}
                                    <input type="hidden" name="content_items" value={JSON.stringify(featureItems)} />
                                </div>
                            </>
                        )}

                        {type === 'CTA' && (
                            <>
                                <div className="space-y-2">
                                    <Label>Main Text</Label>
                                    <Input name="content_title" defaultValue={content.title} placeholder="e.g. Ready to start a project?" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Button Text</Label>
                                    <Input name="content_buttonText" defaultValue={content.buttonText} placeholder="e.g. Contact Me" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Button Link</Label>
                                    <Input name="content_buttonLink" defaultValue={content.buttonLink} placeholder="e.g. /contact" required />
                                </div>
                            </>
                        )}

                    </CardContent>
                </Card>

                <div className="flex justify-end gap-4">
                    <Button type="button" variant="outline" onClick={() => history.back()}>Cancelar</Button>
                    <Button type="submit">{isEditing ? 'Guardar Cambios' : 'Crear Sección'}</Button>
                </div>
            </div>
        </form >
    )
}
