import api from "../config/api";
import { DashboardDataRow } from "../models/Dashboard";

import { ServiceResponse } from "../types/ServiceResponse";

export const getDashboardData = async (client = ""): Promise<ServiceResponse<Array<DashboardDataRow>>> => {
  try {
    const res = await api.get<Array<DashboardDataRow>>('/dashboard', {
      params: {
        client,
      }
    });

    return {
      result: res.data,
      message: 'Dados recuperados com sucesso',
    };
  } catch (error: any) {
    return {
      message: error.message,
      result: false,
    };
  }
};
