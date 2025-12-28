import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventSelectObjectSchema as SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventCreateInputObjectSchema as SeasonalEventCreateInputObjectSchema } from './objects/SeasonalEventCreateInput.schema';
import { SeasonalEventUncheckedCreateInputObjectSchema as SeasonalEventUncheckedCreateInputObjectSchema } from './objects/SeasonalEventUncheckedCreateInput.schema';

export const SeasonalEventCreateOneSchema: z.ZodType<Prisma.SeasonalEventCreateArgs> = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  data: z.union([SeasonalEventCreateInputObjectSchema, SeasonalEventUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SeasonalEventCreateArgs>;

export const SeasonalEventCreateOneZodSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  data: z.union([SeasonalEventCreateInputObjectSchema, SeasonalEventUncheckedCreateInputObjectSchema]) }).strict();