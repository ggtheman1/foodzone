import { z } from "zod"
import { formatNumberWithDecimal } from "./utils"

const Price = (field: string) => 
    z.coerce
        .number()
        .refine(
            (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
            `${field} must have exactly two decimal places (e.g., 49.99)`
        )
 

export const ProductInputSchema=z.object({
    name: z.string().min(3,'name must be at least 3 characters long'),
    slug: z.string().min(3,'slug must be at least 3 characters long'),
    category: z.string().min(1,'category is required'),
    images: z.string().min(1,'Product must have be at least 1 images  '), 
    description: z.string().min(1,'Description is required'),
    price: Price('Price'),
    isPublished: z.boolean(),
    countOrdered: z.coerce
           .number()
           .int()
           .nonnegative('Amount number must be a non-negative number'),
    sizes: z.array(z.string()).default([]),
    avgRating: z.coerce
        .number()
        .min(0, 'Average rating must be at least 0')
        .max(5,'Average rating must be at most 5'),
    ratingDistribution: z
         .array(z.object({rating: z.number(),count:z.number()}))
         .max(5),
    numSales:z.coerce
        .number()
        .int()
        .nonnegative('Number of sales must be a non-negative number'),
})