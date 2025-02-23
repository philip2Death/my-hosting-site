// src/lib/order.ts
interface CreateOrderParams {
    amount: number;
    productType: 'WEB_HOSTING' | 'DATABASE' | 'DOMAIN';
    paymentId: string;
  }
  
  export async function createOrder(orderData: CreateOrderParams) {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
  
    if (!response.ok) {
      throw new Error('订单创建失败');
    }
  
    return response.json();
  }