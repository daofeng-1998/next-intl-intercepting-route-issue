'use client'

import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

export default function LoginPage() {

    const { back } = useRouter()
    const t = useTranslations()
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000099] flex justify-center items-center">

            <button onClick={back}>
                {t('Close')}
            </button>

        </div>
    )
}