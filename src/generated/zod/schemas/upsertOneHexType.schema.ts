import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeSelectObjectSchema as HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeIncludeObjectSchema as HexTypeIncludeObjectSchema } from './objects/HexTypeInclude.schema';
import { HexTypeWhereUniqueInputObjectSchema as HexTypeWhereUniqueInputObjectSchema } from './objects/HexTypeWhereUniqueInput.schema';
import { HexTypeCreateInputObjectSchema as HexTypeCreateInputObjectSchema } from './objects/HexTypeCreateInput.schema';
import { HexTypeUncheckedCreateInputObjectSchema as HexTypeUncheckedCreateInputObjectSchema } from './objects/HexTypeUncheckedCreateInput.schema';
import { HexTypeUpdateInputObjectSchema as HexTypeUpdateInputObjectSchema } from './objects/HexTypeUpdateInput.schema';
import { HexTypeUncheckedUpdateInputObjectSchema as HexTypeUncheckedUpdateInputObjectSchema } from './objects/HexTypeUncheckedUpdateInput.schema';

export const HexTypeUpsertOneSchema: z.ZodType<Prisma.HexTypeUpsertArgs> = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), where: HexTypeWhereUniqueInputObjectSchema, create: z.union([ HexTypeCreateInputObjectSchema, HexTypeUncheckedCreateInputObjectSchema ]), update: z.union([ HexTypeUpdateInputObjectSchema, HexTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.HexTypeUpsertArgs>;

export const HexTypeUpsertOneZodSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), where: HexTypeWhereUniqueInputObjectSchema, create: z.union([ HexTypeCreateInputObjectSchema, HexTypeUncheckedCreateInputObjectSchema ]), update: z.union([ HexTypeUpdateInputObjectSchema, HexTypeUncheckedUpdateInputObjectSchema ]) }).strict();