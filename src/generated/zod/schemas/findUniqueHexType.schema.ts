import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeIncludeObjectSchema } from './objects/HexTypeInclude.schema';
import { HexTypeWhereUniqueInputObjectSchema } from './objects/HexTypeWhereUniqueInput.schema';

export const HexTypeFindUniqueSchema: z.ZodType<Prisma.HexTypeFindUniqueArgs> = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), where: HexTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HexTypeFindUniqueArgs>;

export const HexTypeFindUniqueZodSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), where: HexTypeWhereUniqueInputObjectSchema }).strict();