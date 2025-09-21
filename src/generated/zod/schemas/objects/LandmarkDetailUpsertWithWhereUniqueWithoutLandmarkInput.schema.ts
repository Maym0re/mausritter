import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailUpdateWithoutLandmarkInputObjectSchema } from './LandmarkDetailUpdateWithoutLandmarkInput.schema';
import { LandmarkDetailUncheckedUpdateWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedUpdateWithoutLandmarkInput.schema';
import { LandmarkDetailCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateWithoutLandmarkInput.schema';
import { LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LandmarkDetailUpdateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedUpdateWithoutLandmarkInputObjectSchema)]),
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema)])
}).strict();
export const LandmarkDetailUpsertWithWhereUniqueWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpsertWithWhereUniqueWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpsertWithWhereUniqueWithoutLandmarkInput>;
export const LandmarkDetailUpsertWithWhereUniqueWithoutLandmarkInputObjectZodSchema = makeSchema();
