import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WeatherEntryIncludeObjectSchema } from './objects/WeatherEntryInclude.schema';
import { WeatherEntryOrderByWithRelationInputObjectSchema } from './objects/WeatherEntryOrderByWithRelationInput.schema';
import { WeatherEntryWhereInputObjectSchema } from './objects/WeatherEntryWhereInput.schema';
import { WeatherEntryWhereUniqueInputObjectSchema } from './objects/WeatherEntryWhereUniqueInput.schema';
import { WeatherEntryScalarFieldEnumSchema } from './enums/WeatherEntryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WeatherEntryFindManySelectSchema: z.ZodType<Prisma.WeatherEntrySelect> = z.object({
    id: z.boolean().optional(),
    season: z.boolean().optional(),
    roll: z.boolean().optional(),
    weather: z.boolean().optional(),
    isPoorCondition: z.boolean().optional(),
    Campaign: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WeatherEntrySelect>;

export const WeatherEntryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    season: z.boolean().optional(),
    roll: z.boolean().optional(),
    weather: z.boolean().optional(),
    isPoorCondition: z.boolean().optional(),
    Campaign: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const WeatherEntryFindManySchema: z.ZodType<Prisma.WeatherEntryFindManyArgs> = z.object({ select: WeatherEntryFindManySelectSchema.optional(), include: z.lazy(() => WeatherEntryIncludeObjectSchema.optional()), orderBy: z.union([WeatherEntryOrderByWithRelationInputObjectSchema, WeatherEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WeatherEntryWhereInputObjectSchema.optional(), cursor: WeatherEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WeatherEntryScalarFieldEnumSchema, WeatherEntryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WeatherEntryFindManyArgs>;

export const WeatherEntryFindManyZodSchema = z.object({ select: WeatherEntryFindManySelectSchema.optional(), include: z.lazy(() => WeatherEntryIncludeObjectSchema.optional()), orderBy: z.union([WeatherEntryOrderByWithRelationInputObjectSchema, WeatherEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WeatherEntryWhereInputObjectSchema.optional(), cursor: WeatherEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WeatherEntryScalarFieldEnumSchema, WeatherEntryScalarFieldEnumSchema.array()]).optional() }).strict();