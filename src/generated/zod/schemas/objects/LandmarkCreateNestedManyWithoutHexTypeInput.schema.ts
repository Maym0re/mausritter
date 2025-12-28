import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateWithoutHexTypeInputObjectSchema as LandmarkCreateWithoutHexTypeInputObjectSchema } from './LandmarkCreateWithoutHexTypeInput.schema';
import { LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema as LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexTypeInput.schema';
import { LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema as LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema } from './LandmarkCreateOrConnectWithoutHexTypeInput.schema';
import { LandmarkCreateManyHexTypeInputEnvelopeObjectSchema as LandmarkCreateManyHexTypeInputEnvelopeObjectSchema } from './LandmarkCreateManyHexTypeInputEnvelope.schema';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema).array(), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LandmarkCreateManyHexTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LandmarkWhereUniqueInputObjectSchema), z.lazy(() => LandmarkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LandmarkCreateNestedManyWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkCreateNestedManyWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateNestedManyWithoutHexTypeInput>;
export const LandmarkCreateNestedManyWithoutHexTypeInputObjectZodSchema = makeSchema();
