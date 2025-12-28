import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailCreateWithoutHexCellInputObjectSchema as LandmarkDetailCreateWithoutHexCellInputObjectSchema } from './LandmarkDetailCreateWithoutHexCellInput.schema';
import { LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema as LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutHexCellInput.schema';
import { LandmarkDetailCreateOrConnectWithoutHexCellInputObjectSchema as LandmarkDetailCreateOrConnectWithoutHexCellInputObjectSchema } from './LandmarkDetailCreateOrConnectWithoutHexCellInput.schema';
import { LandmarkDetailUpsertWithoutHexCellInputObjectSchema as LandmarkDetailUpsertWithoutHexCellInputObjectSchema } from './LandmarkDetailUpsertWithoutHexCellInput.schema';
import { LandmarkDetailWhereInputObjectSchema as LandmarkDetailWhereInputObjectSchema } from './LandmarkDetailWhereInput.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema as LandmarkDetailWhereUniqueInputObjectSchema } from './LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailUpdateToOneWithWhereWithoutHexCellInputObjectSchema as LandmarkDetailUpdateToOneWithWhereWithoutHexCellInputObjectSchema } from './LandmarkDetailUpdateToOneWithWhereWithoutHexCellInput.schema';
import { LandmarkDetailUpdateWithoutHexCellInputObjectSchema as LandmarkDetailUpdateWithoutHexCellInputObjectSchema } from './LandmarkDetailUpdateWithoutHexCellInput.schema';
import { LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema as LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema } from './LandmarkDetailUncheckedUpdateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LandmarkDetailCreateOrConnectWithoutHexCellInputObjectSchema).optional(),
  upsert: z.lazy(() => LandmarkDetailUpsertWithoutHexCellInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => LandmarkDetailWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => LandmarkDetailWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LandmarkDetailUpdateToOneWithWhereWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkDetailUpdateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema)]).optional()
}).strict();
export const LandmarkDetailUpdateOneWithoutHexCellNestedInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpdateOneWithoutHexCellNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateOneWithoutHexCellNestedInput>;
export const LandmarkDetailUpdateOneWithoutHexCellNestedInputObjectZodSchema = makeSchema();
