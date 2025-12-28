import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapSelectObjectSchema as HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapIncludeObjectSchema as HexMapIncludeObjectSchema } from './objects/HexMapInclude.schema';
import { HexMapCreateInputObjectSchema as HexMapCreateInputObjectSchema } from './objects/HexMapCreateInput.schema';
import { HexMapUncheckedCreateInputObjectSchema as HexMapUncheckedCreateInputObjectSchema } from './objects/HexMapUncheckedCreateInput.schema';

export const HexMapCreateOneSchema: z.ZodType<Prisma.HexMapCreateArgs> = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), data: z.union([HexMapCreateInputObjectSchema, HexMapUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.HexMapCreateArgs>;

export const HexMapCreateOneZodSchema = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), data: z.union([HexMapCreateInputObjectSchema, HexMapUncheckedCreateInputObjectSchema]) }).strict();