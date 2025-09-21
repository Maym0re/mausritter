import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailUpdateWithoutLandmarkInputObjectSchema } from './LandmarkDetailUpdateWithoutLandmarkInput.schema';
import { LandmarkDetailUncheckedUpdateWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedUpdateWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LandmarkDetailUpdateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedUpdateWithoutLandmarkInputObjectSchema)])
}).strict();
export const LandmarkDetailUpdateWithWhereUniqueWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpdateWithWhereUniqueWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateWithWhereUniqueWithoutLandmarkInput>;
export const LandmarkDetailUpdateWithWhereUniqueWithoutLandmarkInputObjectZodSchema = makeSchema();
