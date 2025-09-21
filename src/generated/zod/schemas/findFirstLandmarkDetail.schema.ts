import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailOrderByWithRelationInputObjectSchema } from './objects/LandmarkDetailOrderByWithRelationInput.schema';
import { LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailScalarFieldEnumSchema } from './enums/LandmarkDetailScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LandmarkDetailFindFirstSelectSchema: z.ZodType<Prisma.LandmarkDetailSelect> = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    effect: z.boolean().optional(),
    Landmark: z.boolean().optional(),
    landmarkId: z.boolean().optional(),
    HexCell: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailSelect>;

export const LandmarkDetailFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    effect: z.boolean().optional(),
    Landmark: z.boolean().optional(),
    landmarkId: z.boolean().optional(),
    HexCell: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const LandmarkDetailFindFirstSchema: z.ZodType<Prisma.LandmarkDetailFindFirstArgs> = z.object({ select: LandmarkDetailFindFirstSelectSchema.optional(), include: z.lazy(() => LandmarkDetailIncludeObjectSchema.optional()), orderBy: z.union([LandmarkDetailOrderByWithRelationInputObjectSchema, LandmarkDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkDetailWhereInputObjectSchema.optional(), cursor: LandmarkDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LandmarkDetailScalarFieldEnumSchema, LandmarkDetailScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailFindFirstArgs>;

export const LandmarkDetailFindFirstZodSchema = z.object({ select: LandmarkDetailFindFirstSelectSchema.optional(), include: z.lazy(() => LandmarkDetailIncludeObjectSchema.optional()), orderBy: z.union([LandmarkDetailOrderByWithRelationInputObjectSchema, LandmarkDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkDetailWhereInputObjectSchema.optional(), cursor: LandmarkDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LandmarkDetailScalarFieldEnumSchema, LandmarkDetailScalarFieldEnumSchema.array()]).optional() }).strict();