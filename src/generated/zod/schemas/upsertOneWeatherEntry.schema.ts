import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WeatherEntrySelectObjectSchema as WeatherEntrySelectObjectSchema } from './objects/WeatherEntrySelect.schema';
import { WeatherEntryIncludeObjectSchema as WeatherEntryIncludeObjectSchema } from './objects/WeatherEntryInclude.schema';
import { WeatherEntryWhereUniqueInputObjectSchema as WeatherEntryWhereUniqueInputObjectSchema } from './objects/WeatherEntryWhereUniqueInput.schema';
import { WeatherEntryCreateInputObjectSchema as WeatherEntryCreateInputObjectSchema } from './objects/WeatherEntryCreateInput.schema';
import { WeatherEntryUncheckedCreateInputObjectSchema as WeatherEntryUncheckedCreateInputObjectSchema } from './objects/WeatherEntryUncheckedCreateInput.schema';
import { WeatherEntryUpdateInputObjectSchema as WeatherEntryUpdateInputObjectSchema } from './objects/WeatherEntryUpdateInput.schema';
import { WeatherEntryUncheckedUpdateInputObjectSchema as WeatherEntryUncheckedUpdateInputObjectSchema } from './objects/WeatherEntryUncheckedUpdateInput.schema';

export const WeatherEntryUpsertOneSchema: z.ZodType<Prisma.WeatherEntryUpsertArgs> = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), where: WeatherEntryWhereUniqueInputObjectSchema, create: z.union([ WeatherEntryCreateInputObjectSchema, WeatherEntryUncheckedCreateInputObjectSchema ]), update: z.union([ WeatherEntryUpdateInputObjectSchema, WeatherEntryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WeatherEntryUpsertArgs>;

export const WeatherEntryUpsertOneZodSchema = z.object({ select: WeatherEntrySelectObjectSchema.optional(), include: WeatherEntryIncludeObjectSchema.optional(), where: WeatherEntryWhereUniqueInputObjectSchema, create: z.union([ WeatherEntryCreateInputObjectSchema, WeatherEntryUncheckedCreateInputObjectSchema ]), update: z.union([ WeatherEntryUpdateInputObjectSchema, WeatherEntryUncheckedUpdateInputObjectSchema ]) }).strict();