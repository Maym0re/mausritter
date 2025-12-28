import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeSelectObjectSchema as HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeIncludeObjectSchema as HexTypeIncludeObjectSchema } from './objects/HexTypeInclude.schema';
import { HexTypeCreateInputObjectSchema as HexTypeCreateInputObjectSchema } from './objects/HexTypeCreateInput.schema';
import { HexTypeUncheckedCreateInputObjectSchema as HexTypeUncheckedCreateInputObjectSchema } from './objects/HexTypeUncheckedCreateInput.schema';

export const HexTypeCreateOneSchema: z.ZodType<Prisma.HexTypeCreateArgs> = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), data: z.union([HexTypeCreateInputObjectSchema, HexTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.HexTypeCreateArgs>;

export const HexTypeCreateOneZodSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), data: z.union([HexTypeCreateInputObjectSchema, HexTypeUncheckedCreateInputObjectSchema]) }).strict();