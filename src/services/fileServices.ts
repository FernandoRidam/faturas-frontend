import api from "../config/api";
import { ServiceResponse } from "../types/ServiceResponse";

export const uploadFile = async ( files: Array<File>): Promise<ServiceResponse<boolean>> => {
  try {
    const formData = new FormData();

    files.forEach(( file ) => formData.append("files", file ));

    const res = await api.post<ServiceResponse<boolean>>('/files', formData );

    return {
      ...res.data,
      result: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      result: false,
    };
  }
};

export const downloadFile = async ( clientId: string, invoiceId: string ) => {
  try {
    const res = await api.get(`/files/${ clientId }/${ invoiceId }.pdf`, {
      responseType: 'arraybuffer',
    });

    // const fileData = Buffer.from(response.data, 'binary');

    return {
      result: res.data,
      message: 'Download concluído com sucesso'
    };
  } catch (error: any) {
    return {
      message: error.message,
      result: false,
    };
  }
};
