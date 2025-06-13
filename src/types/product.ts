type Category = 'books' | 'electronics' | 'clothing' | 'other';

export interface CreateProduct {
  name: string;
  price: number;
  category: Category;
  description?: string;
}

export type UpdateProduct = Partial<CreateProduct>;
