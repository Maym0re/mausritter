import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignIncludeObjectSchema as BirthsignIncludeObjectSchema } from './objects/BirthsignInclude.schema';
import { BirthsignOrderByWithRelationInputObjectSchema as BirthsignOrderByWithRelationInputObjectSchema } from './objects/BirthsignOrderByWithRelationInput.schema';
import { BirthsignWhereInputObjectSchema as BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';
import { BirthsignWhereUniqueInputObjectSchema as BirthsignWhereUniqueInputObjectSchema } from './objects/BirthsignWhereUniqueInput.schema';
import { BirthsignScalarFieldEnumSchema } from './enums/BirthsignScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BirthsignFindFirstSelectSchema: z.ZodType<Prisma.BirthsignSelect> = z.object({
    id: z.boolean().optional(),
    sign: z.boolean().optional(),
    disposition: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BirthsignSelect>;

export const BirthsignFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    sign: z.boolean().optional(),
    disposition: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const BirthsignFindFirstSchema: z.ZodType<Prisma.BirthsignFindFirstArgs> = z.object({ select: BirthsignFindFirstSelectSchema.optional(), include: z.lazy(() => BirthsignIncludeObjectSchema.optional()), orderBy: z.union([BirthsignOrderByWithRelationInputObjectSchema, BirthsignOrderByWithRelationInputObjectSchema.array()]).optional(), where: BirthsignWhereInputObjectSchema.optional(), cursor: BirthsignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BirthsignScalarFieldEnumSchema, BirthsignScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignFindFirstArgs>;

export const BirthsignFindFirstZodSchema = z.object({ select: BirthsignFindFirstSelectSchema.optional(), include: z.lazy(() => BirthsignIncludeObjectSchema.optional()), orderBy: z.union([BirthsignOrderByWithRelationInputObjectSchema, BirthsignOrderByWithRelationInputObjectSchema.array()]).optional(), where: BirthsignWhereInputObjectSchema.optional(), cursor: BirthsignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BirthsignScalarFieldEnumSchema, BirthsignScalarFieldEnumSchema.array()]).optional() }).strict();