import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkOrderByWithRelationInputObjectSchema } from './objects/LandmarkOrderByWithRelationInput.schema';
import { LandmarkWhereInputObjectSchema } from './objects/LandmarkWhereInput.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';
import { LandmarkScalarFieldEnumSchema } from './enums/LandmarkScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LandmarkFindFirstOrThrowSelectSchema: z.ZodType<Prisma.LandmarkSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    hexTypeId: z.boolean().optional(),
    hexType: z.boolean().optional(),
    details: z.boolean().optional(),
    HexCell: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LandmarkSelect>;

export const LandmarkFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    hexTypeId: z.boolean().optional(),
    hexType: z.boolean().optional(),
    details: z.boolean().optional(),
    HexCell: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const LandmarkFindFirstOrThrowSchema: z.ZodType<Prisma.LandmarkFindFirstOrThrowArgs> = z.object({ select: LandmarkFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => LandmarkIncludeObjectSchema.optional()), orderBy: z.union([LandmarkOrderByWithRelationInputObjectSchema, LandmarkOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkWhereInputObjectSchema.optional(), cursor: LandmarkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LandmarkScalarFieldEnumSchema, LandmarkScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkFindFirstOrThrowArgs>;

export const LandmarkFindFirstOrThrowZodSchema = z.object({ select: LandmarkFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => LandmarkIncludeObjectSchema.optional()), orderBy: z.union([LandmarkOrderByWithRelationInputObjectSchema, LandmarkOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkWhereInputObjectSchema.optional(), cursor: LandmarkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LandmarkScalarFieldEnumSchema, LandmarkScalarFieldEnumSchema.array()]).optional() }).strict();