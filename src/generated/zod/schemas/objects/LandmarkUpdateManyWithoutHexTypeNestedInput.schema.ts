import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateWithoutHexTypeInputObjectSchema } from './LandmarkCreateWithoutHexTypeInput.schema';
import { LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexTypeInput.schema';
import { LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema } from './LandmarkCreateOrConnectWithoutHexTypeInput.schema';
import { LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema } from './LandmarkUpsertWithWhereUniqueWithoutHexTypeInput.schema';
import { LandmarkCreateManyHexTypeInputEnvelopeObjectSchema } from './LandmarkCreateManyHexTypeInputEnvelope.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema } from './LandmarkUpdateWithWhereUniqueWithoutHexTypeInput.schema';
import { LandmarkUpdateManyWithWhereWithoutHexTypeInputObjectSchema } from './LandmarkUpdateManyWithWhereWithoutHexTypeInput.schema';
import { LandmarkScalarWhereInputObjectSchema } from './LandmarkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema).array(), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LandmarkCreateManyHexTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LandmarkWhereUniqueInputObjectSchema), z.lazy(() => LandmarkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LandmarkWhereUniqueInputObjectSchema), z.lazy(() => LandmarkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LandmarkWhereUniqueInputObjectSchema), z.lazy(() => LandmarkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LandmarkWhereUniqueInputObjectSchema), z.lazy(() => LandmarkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LandmarkUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LandmarkUpdateManyWithWhereWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUpdateManyWithWhereWithoutHexTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LandmarkScalarWhereInputObjectSchema), z.lazy(() => LandmarkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LandmarkUpdateManyWithoutHexTypeNestedInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateManyWithoutHexTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateManyWithoutHexTypeNestedInput>;
export const LandmarkUpdateManyWithoutHexTypeNestedInputObjectZodSchema = makeSchema();
