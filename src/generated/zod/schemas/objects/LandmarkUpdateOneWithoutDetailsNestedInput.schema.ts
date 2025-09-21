import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateWithoutDetailsInputObjectSchema } from './LandmarkCreateWithoutDetailsInput.schema';
import { LandmarkUncheckedCreateWithoutDetailsInputObjectSchema } from './LandmarkUncheckedCreateWithoutDetailsInput.schema';
import { LandmarkCreateOrConnectWithoutDetailsInputObjectSchema } from './LandmarkCreateOrConnectWithoutDetailsInput.schema';
import { LandmarkUpsertWithoutDetailsInputObjectSchema } from './LandmarkUpsertWithoutDetailsInput.schema';
import { LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkUpdateToOneWithWhereWithoutDetailsInputObjectSchema } from './LandmarkUpdateToOneWithWhereWithoutDetailsInput.schema';
import { LandmarkUpdateWithoutDetailsInputObjectSchema } from './LandmarkUpdateWithoutDetailsInput.schema';
import { LandmarkUncheckedUpdateWithoutDetailsInputObjectSchema } from './LandmarkUncheckedUpdateWithoutDetailsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkCreateWithoutDetailsInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LandmarkCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  upsert: z.lazy(() => LandmarkUpsertWithoutDetailsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => LandmarkWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => LandmarkWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => LandmarkWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LandmarkUpdateToOneWithWhereWithoutDetailsInputObjectSchema), z.lazy(() => LandmarkUpdateWithoutDetailsInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateWithoutDetailsInputObjectSchema)]).optional()
}).strict();
export const LandmarkUpdateOneWithoutDetailsNestedInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateOneWithoutDetailsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateOneWithoutDetailsNestedInput>;
export const LandmarkUpdateOneWithoutDetailsNestedInputObjectZodSchema = makeSchema();
