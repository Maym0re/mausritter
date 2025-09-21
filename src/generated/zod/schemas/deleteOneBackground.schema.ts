import { z } from 'zod';
import { BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';

export const BackgroundDeleteOneSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), where: BackgroundWhereUniqueInputObjectSchema  })