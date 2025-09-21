import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateWithoutHexCellInputObjectSchema } from './LandmarkCreateWithoutHexCellInput.schema';
import { LandmarkUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexCellInput.schema';
import { LandmarkCreateOrConnectWithoutHexCellInputObjectSchema } from './LandmarkCreateOrConnectWithoutHexCellInput.schema';
import { LandmarkUpsertWithoutHexCellInputObjectSchema } from './LandmarkUpsertWithoutHexCellInput.schema';
import { LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkUpdateToOneWithWhereWithoutHexCellInputObjectSchema } from './LandmarkUpdateToOneWithWhereWithoutHexCellInput.schema';
import { LandmarkUpdateWithoutHexCellInputObjectSchema } from './LandmarkUpdateWithoutHexCellInput.schema';
import { LandmarkUncheckedUpdateWithoutHexCellInputObjectSchema } from './LandmarkUncheckedUpdateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexCellInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LandmarkCreateOrConnectWithoutHexCellInputObjectSchema).optional(),
  upsert: z.lazy(() => LandmarkUpsertWithoutHexCellInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => LandmarkWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => LandmarkWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => LandmarkWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LandmarkUpdateToOneWithWhereWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUpdateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateWithoutHexCellInputObjectSchema)]).optional()
}).strict();
export const LandmarkUpdateOneWithoutHexCellNestedInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateOneWithoutHexCellNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateOneWithoutHexCellNestedInput>;
export const LandmarkUpdateOneWithoutHexCellNestedInputObjectZodSchema = makeSchema();
