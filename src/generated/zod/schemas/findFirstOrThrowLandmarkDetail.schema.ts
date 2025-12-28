import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailIncludeObjectSchema as LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailOrderByWithRelationInputObjectSchema as LandmarkDetailOrderByWithRelationInputObjectSchema } from './objects/LandmarkDetailOrderByWithRelationInput.schema';
import { LandmarkDetailWhereInputObjectSchema as LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema as LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailScalarFieldEnumSchema } from './enums/LandmarkDetailScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LandmarkDetailFindFirstOrThrowSelectSchema: z.ZodType<Prisma.LandmarkDetailSelect> = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    effect: z.boolean().optional(),
    Landmark: z.boolean().optional(),
    landmarkId: z.boolean().optional(),
    HexCell: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailSelect>;

export const LandmarkDetailFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    effect: z.boolean().optional(),
    Landmark: z.boolean().optional(),
    landmarkId: z.boolean().optional(),
    HexCell: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const LandmarkDetailFindFirstOrThrowSchema: z.ZodType<Prisma.LandmarkDetailFindFirstOrThrowArgs> = z.object({ select: LandmarkDetailFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => LandmarkDetailIncludeObjectSchema.optional()), orderBy: z.union([LandmarkDetailOrderByWithRelationInputObjectSchema, LandmarkDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkDetailWhereInputObjectSchema.optional(), cursor: LandmarkDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LandmarkDetailScalarFieldEnumSchema, LandmarkDetailScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailFindFirstOrThrowArgs>;

export const LandmarkDetailFindFirstOrThrowZodSchema = z.object({ select: LandmarkDetailFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => LandmarkDetailIncludeObjectSchema.optional()), orderBy: z.union([LandmarkDetailOrderByWithRelationInputObjectSchema, LandmarkDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: LandmarkDetailWhereInputObjectSchema.optional(), cursor: LandmarkDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LandmarkDetailScalarFieldEnumSchema, LandmarkDetailScalarFieldEnumSchema.array()]).optional() }).strict();