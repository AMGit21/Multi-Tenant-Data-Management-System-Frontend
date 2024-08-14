import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Can I modify the table name?</AccordionTrigger>
                <AccordionContent>
                    Yes. You can perform this action.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Can I add some constraints to a specific tables?</AccordionTrigger>
                <AccordionContent>
                    Yes. You can do that.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Can I change my credentials?</AccordionTrigger>
                <AccordionContent>
                    Yes. You can, but make sure that you enter a robust password.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
