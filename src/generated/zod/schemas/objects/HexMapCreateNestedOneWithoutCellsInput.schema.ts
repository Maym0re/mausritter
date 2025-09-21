import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutCellsInputObjectSchema } from './HexMapCreateWithoutCellsInput.schema';
import { HexMapUncheckedCreateWithoutCellsInputObjectSchema } from './HexMapUncheckedCreateWithoutCellsInput.schema';
import { HexMapCreateOrConnectWithoutCellsInputObjectSchema } from './HexMapCreateOrConnectWithoutCellsInput.schema';
import { HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutCellsInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutCellsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutCellsInputObjectSchema).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional()
}).strict();
export const HexMapCreateNestedOneWithoutCellsInputObjectSchema: z.ZodType<Prisma.HexMapCreateNestedOneWithoutCellsInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateNestedOneWithoutCellsInput>;
export const HexMapCreateNestedOneWithoutCellsInputObjectZodSchema = makeSchema();
