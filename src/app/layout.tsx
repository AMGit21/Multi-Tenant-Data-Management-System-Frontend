// app/layout.tsx

import React from 'react';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { BreadcrumbCollapsed } from '@/components/BreadcrumbCollapsed';
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>Multi-Tenant Platform</title>
                <meta name="description" content="A Next.js application" />
            </head>
            <body>
                <header>
                    <div className='navigation'>
                        <BreadcrumbCollapsed />
                    </div>
                </header>

                <main>{children}</main>
                <Toaster />
                <footer className='footerSection'>
                    <p className='footerParagraph'>&copy; 2024&#160;-&#160;Multi Tenant Platform&#160;-&#160;<a href="https://www.linkedin.com/in/ali-mantache" target="_blank" className='name'>Ali Mantache</a>.</p>
                </footer>
            </body>
        </html>
    );
};

export default Layout;
