import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateWithoutLandmarkInput.schema';
import { LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema)])
}).strict();
export const LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateOrConnectWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateOrConnectWithoutLandmarkInput>;
export const LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectZodSchema = makeSchema();
