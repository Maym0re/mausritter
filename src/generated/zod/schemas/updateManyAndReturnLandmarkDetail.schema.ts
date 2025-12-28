import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailSelectObjectSchema as LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailUpdateManyMutationInputObjectSchema as LandmarkDetailUpdateManyMutationInputObjectSchema } from './objects/LandmarkDetailUpdateManyMutationInput.schema';
import { LandmarkDetailWhereInputObjectSchema as LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';

export const LandmarkDetailUpdateManyAndReturnSchema: z.ZodType<Prisma.LandmarkDetailUpdateManyAndReturnArgs> = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), data: LandmarkDetailUpdateManyMutationInputObjectSchema, where: LandmarkDetailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateManyAndReturnArgs>;

export const LandmarkDetailUpdateManyAndReturnZodSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), data: LandmarkDetailUpdateManyMutationInputObjectSchema, where: LandmarkDetailWhereInputObjectSchema.optional() }).strict();