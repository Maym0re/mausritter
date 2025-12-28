import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeIncludeObjectSchema as HexTypeIncludeObjectSchema } from './objects/HexTypeInclude.schema';
import { HexTypeOrderByWithRelationInputObjectSchema as HexTypeOrderByWithRelationInputObjectSchema } from './objects/HexTypeOrderByWithRelationInput.schema';
import { HexTypeWhereInputObjectSchema as HexTypeWhereInputObjectSchema } from './objects/HexTypeWhereInput.schema';
import { HexTypeWhereUniqueInputObjectSchema as HexTypeWhereUniqueInputObjectSchema } from './objects/HexTypeWhereUniqueInput.schema';
import { HexTypeScalarFieldEnumSchema } from './enums/HexTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HexTypeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.HexTypeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    color: z.boolean().optional(),
    description: z.boolean().optional(),
    landmarks: z.boolean().optional(),
    HexCell: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.HexTypeSelect>;

export const HexTypeFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    color: z.boolean().optional(),
    description: z.boolean().optional(),
    landmarks: z.boolean().optional(),
    HexCell: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const HexTypeFindFirstOrThrowSchema: z.ZodType<Prisma.HexTypeFindFirstOrThrowArgs> = z.object({ select: HexTypeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => HexTypeIncludeObjectSchema.optional()), orderBy: z.union([HexTypeOrderByWithRelationInputObjectSchema, HexTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexTypeWhereInputObjectSchema.optional(), cursor: HexTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HexTypeScalarFieldEnumSchema, HexTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.HexTypeFindFirstOrThrowArgs>;

export const HexTypeFindFirstOrThrowZodSchema = z.object({ select: HexTypeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => HexTypeIncludeObjectSchema.optional()), orderBy: z.union([HexTypeOrderByWithRelationInputObjectSchema, HexTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexTypeWhereInputObjectSchema.optional(), cursor: HexTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HexTypeScalarFieldEnumSchema, HexTypeScalarFieldEnumSchema.array()]).optional() }).strict();