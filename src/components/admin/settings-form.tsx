'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageUpload } from '@/components/admin/image-upload'
import { updateSettings } from '@/app/admin/settings/actions'
import { Save } from 'lucide-react'

interface SettingsFormProps {
    initialData: any
}

export function SettingsForm({ initialData }: SettingsFormProps) {
    // Identity State
    const [identity, setIdentity] = useState({
        siteName: initialData.siteName,
        description: initialData.description,
        logoUrl: initialData.logoUrl,
        faviconUrl: initialData.faviconUrl,
    })

    // Socials State
    const [socials, setSocials] = useState(initialData.socials || { twitter: '', linkedin: '', github: '', facebook: '', instagram: '', whatsapp: '', email: '' })

    const handleIdentityChange = (key: string, value: string) => {
        setIdentity(prev => ({ ...prev, [key]: value }))
    }

    const handleSocialChange = (key: string, value: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setSocials((prev: any) => ({ ...prev, [key]: value }))
    }

    return (
        <form action={updateSettings} className="space-y-6">
            <div className="flex justify-end">
                <Button type="submit">
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Site Identity</CardTitle>
                    <CardDescription>Configure basic site information and visuals.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label>Site Name</Label>
                            <Input
                                name="siteName"
                                value={identity.siteName}
                                onChange={e => handleIdentityChange('siteName', e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Description (SEO)</Label>
                            <Textarea
                                name="description"
                                value={identity.description}
                                onChange={e => handleIdentityChange('description', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label>Logo</Label>
                            <ImageUpload
                                value={identity.logoUrl}
                                onChange={url => handleIdentityChange('logoUrl', url)}
                            />
                            <p className="text-[0.8rem] text-muted-foreground">
                                Recommended: PNG or SVG with transparent background. Resolution: 512x512px.
                            </p>
                            <input type="hidden" name="logoUrl" value={identity.logoUrl || ''} />
                        </div>
                        <div className="space-y-2">
                            <Label>Favicon (Optional)</Label>
                            <ImageUpload
                                value={identity.faviconUrl}
                                onChange={url => handleIdentityChange('faviconUrl', url)}
                            />
                            <p className="text-[0.8rem] text-muted-foreground">
                                Recommended: ICO or PNG format (32x32px).
                            </p>
                            <input type="hidden" name="faviconUrl" value={identity.faviconUrl || ''} />
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-medium">Social Links</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="space-y-2">
                                <Label>Twitter / X</Label>
                                <Input
                                    value={socials.twitter}
                                    onChange={e => handleSocialChange('twitter', e.target.value)}
                                    placeholder="https://x.com/..."
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>LinkedIn</Label>
                                <Input
                                    value={socials.linkedin}
                                    onChange={e => handleSocialChange('linkedin', e.target.value)}
                                    placeholder="https://linkedin.com/in/..."
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>GitHub</Label>
                                <Input
                                    value={socials.github}
                                    onChange={e => handleSocialChange('github', e.target.value)}
                                    placeholder="https://github.com/..."
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Facebook</Label>
                                <Input
                                    value={socials.facebook}
                                    onChange={e => handleSocialChange('facebook', e.target.value)}
                                    placeholder="https://facebook.com/..."
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Instagram</Label>
                                <Input
                                    value={socials.instagram}
                                    onChange={e => handleSocialChange('instagram', e.target.value)}
                                    placeholder="https://instagram.com/..."
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>WhatsApp</Label>
                                <Input
                                    value={socials.whatsapp}
                                    onChange={e => handleSocialChange('whatsapp', e.target.value)}
                                    placeholder="+1234567890"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input
                                    value={socials.email}
                                    onChange={e => handleSocialChange('email', e.target.value)}
                                    placeholder="contact@example.com"
                                />
                            </div>
                        </div>
                        <input type="hidden" name="socials" value={JSON.stringify(socials)} />
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}
