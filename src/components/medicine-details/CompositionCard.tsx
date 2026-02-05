import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Beaker } from "lucide-react";
import { CompositionItem } from "@/data/medicineData";

interface CompositionCardProps {
  servingSize: string;
  composition: CompositionItem[];
}

export function CompositionCard({ servingSize, composition }: CompositionCardProps) {
  return (
    <Card className="shadow-medical">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Beaker className="h-5 w-5 text-primary" />
          Active & Inactive Ingredients
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-card rounded-lg border border-border/50 overflow-hidden">
          {/* Serving Size Header */}
          <div className="bg-primary/10 px-4 py-3 border-b border-border/50">
            <p className="font-semibold text-primary text-lg">{servingSize}</p>
          </div>
          
          {/* Composition Table */}
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-foreground">Ingredient</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {composition.map((comp, index) => (
                <TableRow 
                  key={index} 
                  className="hover:bg-muted/50 transition-colors"
                >
                  <TableCell className="font-medium text-foreground">
                    {comp.ingredient}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground font-mono">
                    {comp.strength}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
