'use client'
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

export default function ClientSideProvider({
    locale,
    messages,
    children
}: {
    locale: string
    messages: AbstractIntlMessages,
    children: ReactNode
}) {
    return (
        <NextIntlClientProvider
            messages={messages}
            locale={locale}
        >
            {children}
        </NextIntlClientProvider>
    )

}