
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/types/product";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { format, subDays } from "date-fns";

interface PriceHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export function PriceHistoryModal({ isOpen, onClose, product }: PriceHistoryModalProps) {
  // Generate mock price history data
  const generatePriceHistory = () => {
    const today = new Date();
    const data = [];
    
    // Base price is the current product price
    const basePrice = product.price;
    
    // Generate data for the last 30 days
    for (let i = 30; i >= 0; i--) {
      const date = subDays(today, i);
      // Random fluctuation between -10% and +5% from the base price
      const fluctuation = basePrice * (Math.random() * 0.15 - 0.10);
      const price = Math.max(basePrice + fluctuation, basePrice * 0.7);
      
      data.push({
        date: format(date, 'MMM dd'),
        price: Number(price.toFixed(2)),
      });
    }
    
    return data;
  };
  
  const priceHistory = generatePriceHistory();
  
  const getLowestPrice = () => {
    return Math.min(...priceHistory.map(item => item.price));
  };
  
  const getHighestPrice = () => {
    return Math.max(...priceHistory.map(item => item.price));
  };
  
  const getAveragePrice = () => {
    const sum = priceHistory.reduce((acc, item) => acc + item.price, 0);
    return (sum / priceHistory.length).toFixed(2);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Price History for {product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={priceHistory}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="date"
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: '#ddd' }}
                tickLine={{ stroke: '#ddd' }}
              />
              <YAxis 
                domain={['auto', 'auto']}
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: '#ddd' }}
                tickLine={{ stroke: '#ddd' }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Price']}
                labelFormatter={(label) => `Date: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 3, strokeWidth: 1 }}
                activeDot={{ r: 5, strokeWidth: 2 }}
                isAnimationActive={true}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-3 gap-4 my-2">
          <div className="bg-secondary p-3 rounded-md text-center">
            <div className="text-xs text-muted-foreground">Lowest</div>
            <div className="font-semibold">${getLowestPrice()}</div>
          </div>
          <div className="bg-secondary p-3 rounded-md text-center">
            <div className="text-xs text-muted-foreground">Average</div>
            <div className="font-semibold">${getAveragePrice()}</div>
          </div>
          <div className="bg-secondary p-3 rounded-md text-center">
            <div className="text-xs text-muted-foreground">Highest</div>
            <div className="font-semibold">${getHighestPrice()}</div>
          </div>
        </div>
        
        <div className="pt-2">
          <h3 className="text-sm font-medium mb-1">Price Insights</h3>
          <p className="text-sm text-muted-foreground">
            The current price (${product.price.toFixed(2)}) is{' '}
            {product.price < Number(getAveragePrice()) ? 'below' : 'above'} the 30-day average price of ${getAveragePrice()}.
            {product.price === getLowestPrice() && " This is the lowest price in the last 30 days!"}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
