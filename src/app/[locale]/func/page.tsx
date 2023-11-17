'use client'
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function FuncPage() {

    const t = useTranslations()

    return (
        <div className="p-6">
            <Link
                style={{
                    border: '5px solid red'
                }}
                className="p-5"
                href='/login'
            >

                {t('Login')}
            </Link>
        </div>
    )

}