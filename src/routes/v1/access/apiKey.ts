import express from 'express';
import ApiKeyRepo from '../../../database/repository/ApiKeyRepo';
import { SuccessResponse } from '../../../core/ApiResponse';
import { RoleRequest } from 'app-request';
import crypto from 'crypto';
import asyncHandler from '../../../helpers/asyncHandler';

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req: RoleRequest, res) => {
    let key: String = crypto.randomBytes(64).toString('hex').substr(0, 35); //String
    const newKey = await ApiKeyRepo.create(key);

    new SuccessResponse('Request Success', {
      key: newKey.key,
    }).send(res);

  }),
);

export default router;
