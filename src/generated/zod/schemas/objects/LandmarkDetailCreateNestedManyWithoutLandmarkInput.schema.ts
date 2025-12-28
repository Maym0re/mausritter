import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailCreateWithoutLandmarkInputObjectSchema as LandmarkDetailCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateWithoutLandmarkInput.schema';
import { LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema as LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutLandmarkInput.schema';
import { LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema as LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateOrConnectWithoutLandmarkInput.schema';
import { LandmarkDetailCreateManyLandmarkInputEnvelopeObjectSchema as LandmarkDetailCreateManyLandmarkInputEnvelopeObjectSchema } from './LandmarkDetailCreateManyLandmarkInputEnvelope.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema as LandmarkDetailWhereUniqueInputObjectSchema } from './LandmarkDetailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailCreateWithoutLandmarkInputObjectSchema).array(), z.lazy(() => LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LandmarkDetailCreateManyLandmarkInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema), z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LandmarkDetailCreateNestedManyWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateNestedManyWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateNestedManyWithoutLandmarkInput>;
export const LandmarkDetailCreateNestedManyWithoutLandmarkInputObjectZodSchema = makeSchema();
