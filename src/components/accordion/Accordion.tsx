'use client'

import {
  Accordion as RadixAccordion,
  type AccordionMultipleProps,
  type AccordionSingleProps,
} from '@radix-ui/react-accordion'
import AccordionContent from './AccordionContent'
import AccordionItem from './AccordionItem'
import AccordionTrigger from './AccordionTrigger'

const AccordionRoot = RadixAccordion

const Accordion: React.FC<AccordionSingleProps | AccordionMultipleProps> & {
  Content: typeof AccordionContent
  Item: typeof AccordionItem
  Trigger: typeof AccordionTrigger
} = Object.assign(RadixAccordion, {
  Content: AccordionContent,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
})

export default Accordion
export { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger }
