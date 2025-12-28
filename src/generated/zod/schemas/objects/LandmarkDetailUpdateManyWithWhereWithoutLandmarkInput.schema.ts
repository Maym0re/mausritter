import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailScalarWhereInputObjectSchema as LandmarkDetailScalarWhereInputObjectSchema } from './LandmarkDetailScalarWhereInput.schema';
import { LandmarkDetailUpdateManyMutationInputObjectSchema as LandmarkDetailUpdateManyMutationInputObjectSchema } from './LandmarkDetailUpdateManyMutationInput.schema';
import { LandmarkDetailUncheckedUpdateManyWithoutLandmarkInputObjectSchema as LandmarkDetailUncheckedUpdateManyWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedUpdateManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkDetailScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LandmarkDetailUpdateManyMutationInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedUpdateManyWithoutLandmarkInputObjectSchema)])
}).strict();
export const LandmarkDetailUpdateManyWithWhereWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpdateManyWithWhereWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateManyWithWhereWithoutLandmarkInput>;
export const LandmarkDetailUpdateManyWithWhereWithoutLandmarkInputObjectZodSchema = makeSchema();
