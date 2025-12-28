import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailWhereUniqueInputObjectSchema as LandmarkDetailWhereUniqueInputObjectSchema } from './LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailCreateWithoutLandmarkInputObjectSchema as LandmarkDetailCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateWithoutLandmarkInput.schema';
import { LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema as LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema)])
}).strict();
export const LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateOrConnectWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateOrConnectWithoutLandmarkInput>;
export const LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectZodSchema = makeSchema();
