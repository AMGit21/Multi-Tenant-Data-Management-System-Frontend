import React, { useEffect, useState } from 'react'
import { ChartTooltip } from "@/components/chartTooltip";
import '@/app/globals.css';
import './dashboard.css'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RocketIcon } from '@radix-ui/react-icons';
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button';
import { SeparatorDemo } from '@/components/separator';
import { AccordionDemo } from '@/components/accordionDemo';
import { BreadcrumbCollapsed } from '@/components/BreadcrumbCollapsed';
import GetTablesListForSpecificUser from '@/api/GetTablesListForSpecificUser';

function Dashboard() {
    const [tablesList, setTablesList] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetTablesListForSpecificUser('ali');
            setTablesList(data);
        };
        fetchData();
    }, []); // Empty dependency array ensures it runs once

    return (
        <div className='dashboardPage'>
            <div className='navigation'>
                <BreadcrumbCollapsed />
            </div>
            <div className='ContentWrapper'>
                <div className='alertsContainer'>
                    <SeparatorDemo data={tablesList} />
                    <AccordionDemo />
                    <Alert>
                        <RocketIcon className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can manage you database from here.
                        </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                        <ExclamationTriangleIcon className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Your session has expired. Please log in again.
                        </AlertDescription>
                    </Alert>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">Open Session</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Make sure to provide a valid data before submitting any values. your data is critical and you want to secure it.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                </div>
                <ChartTooltip />
            </div>
        </div>
    )
}

export default Dashboard;