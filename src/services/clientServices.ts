import api from "../config/api";
import { Client } from "../models/Client";
import { Invoice } from "../models/Invoice";

import { ServicePagedResponse } from "../types/ServiceResponse";

export const getClients = async ( search = "", page = 1, perPage = 25 ): Promise<ServicePagedResponse<Client>> => {
  try {
    const res = await api.get<ServicePagedResponse<Client>>('/client', {
      params: {
        search,
        page,
        perPage,
      },
    });

    return res.data;
  } catch (error: any) {
    return {
      message: error.message,
      results: false,
    };
  }
};

export const getInvoicesByClient = async ( id: string, page = 1, perPage = 25 ): Promise<ServicePagedResponse<Invoice>> => {
  try {
    const res = await api.get<ServicePagedResponse<Invoice>>(`/client/${ id }/invoices`, {
      params: {
        page,
        perPage,
      },
    });

    return res.data;
  } catch (error: any) {
    return {
      message: error.message,
      results: false,
    };
  }
};
