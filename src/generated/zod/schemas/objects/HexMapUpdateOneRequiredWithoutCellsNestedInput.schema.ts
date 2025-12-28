import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutCellsInputObjectSchema as HexMapCreateWithoutCellsInputObjectSchema } from './HexMapCreateWithoutCellsInput.schema';
import { HexMapUncheckedCreateWithoutCellsInputObjectSchema as HexMapUncheckedCreateWithoutCellsInputObjectSchema } from './HexMapUncheckedCreateWithoutCellsInput.schema';
import { HexMapCreateOrConnectWithoutCellsInputObjectSchema as HexMapCreateOrConnectWithoutCellsInputObjectSchema } from './HexMapCreateOrConnectWithoutCellsInput.schema';
import { HexMapUpsertWithoutCellsInputObjectSchema as HexMapUpsertWithoutCellsInputObjectSchema } from './HexMapUpsertWithoutCellsInput.schema';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema';
import { HexMapUpdateToOneWithWhereWithoutCellsInputObjectSchema as HexMapUpdateToOneWithWhereWithoutCellsInputObjectSchema } from './HexMapUpdateToOneWithWhereWithoutCellsInput.schema';
import { HexMapUpdateWithoutCellsInputObjectSchema as HexMapUpdateWithoutCellsInputObjectSchema } from './HexMapUpdateWithoutCellsInput.schema';
import { HexMapUncheckedUpdateWithoutCellsInputObjectSchema as HexMapUncheckedUpdateWithoutCellsInputObjectSchema } from './HexMapUncheckedUpdateWithoutCellsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutCellsInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutCellsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutCellsInputObjectSchema).optional(),
  upsert: z.lazy(() => HexMapUpsertWithoutCellsInputObjectSchema).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => HexMapUpdateToOneWithWhereWithoutCellsInputObjectSchema), z.lazy(() => HexMapUpdateWithoutCellsInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutCellsInputObjectSchema)]).optional()
}).strict();
export const HexMapUpdateOneRequiredWithoutCellsNestedInputObjectSchema: z.ZodType<Prisma.HexMapUpdateOneRequiredWithoutCellsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateOneRequiredWithoutCellsNestedInput>;
export const HexMapUpdateOneRequiredWithoutCellsNestedInputObjectZodSchema = makeSchema();
