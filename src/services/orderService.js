/**
 * Order Service
 * Handles all order-related API calls
 */

import api from "./api";

const ORDER_ENDPOINTS = {
  getOrders: "/orders",
  getOrder: (id) => `/orders/${id}`,
  createOrder: "/orders",
  updateOrder: (id) => `/orders/${id}`,
  cancelOrder: (id) => `/orders/${id}/cancel`,
  getPricingRules: "/pricing/rules",
  calculatePrice: "/pricing/calculate",
};

export const getOrders = async (params = {}) => {
  const response = await api.get(ORDER_ENDPOINTS.getOrders, { params });
  return response.data;
};

export const getOrder = async (id) => {
  const response = await api.get(ORDER_ENDPOINTS.getOrder(id));
  return response.data;
};

export const createOrder = async (orderData) => {
  const isFormData =
    typeof FormData !== "undefined" && orderData instanceof FormData;
  const response = isFormData
    ? await api.postForm(ORDER_ENDPOINTS.createOrder, orderData)
    : await api.post(ORDER_ENDPOINTS.createOrder, orderData);
  return response.data;
};

export const updateOrder = async (id, orderData) => {
  const response = await api.put(ORDER_ENDPOINTS.updateOrder(id), orderData);
  return response.data;
};

export const cancelOrder = async (id) => {
  const response = await api.post(ORDER_ENDPOINTS.cancelOrder(id));
  return response.data;
};

export const getPricingRules = async () => {
  const response = await api.get(ORDER_ENDPOINTS.getPricingRules);
  return response.data;
};

export const calculatePrice = async (params) => {
  const response = await api.get(ORDER_ENDPOINTS.calculatePrice, { params });
  return response.data;
};

const orderService = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  cancelOrder,
  getPricingRules,
  calculatePrice,
};

export default orderService;
