import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeSelectObjectSchema as HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeIncludeObjectSchema as HexTypeIncludeObjectSchema } from './objects/HexTypeInclude.schema';
import { HexTypeWhereUniqueInputObjectSchema as HexTypeWhereUniqueInputObjectSchema } from './objects/HexTypeWhereUniqueInput.schema';

export const HexTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.HexTypeFindUniqueOrThrowArgs> = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), where: HexTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HexTypeFindUniqueOrThrowArgs>;

export const HexTypeFindUniqueOrThrowZodSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), where: HexTypeWhereUniqueInputObjectSchema }).strict();