import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clock, Syringe } from "lucide-react";
import { DosageItem } from "@/data/medicineData";

interface DosageCardProps {
  dosage: string | DosageItem[];
}

export function DosageCard({ dosage }: DosageCardProps) {
  const isTableDosage = Array.isArray(dosage);

  return (
    <Card className="shadow-medical">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Syringe className="h-5 w-5 text-primary" />
          Dosage & Administration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-card rounded-lg border border-border/50 overflow-hidden">
          {isTableDosage ? (
            <>
              {/* Dosage Table */}
              <div className="bg-primary/10 px-4 py-3 border-b border-border/50">
                <p className="font-semibold text-primary">Recommended Dosage by Animal Type</p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-semibold text-foreground">Animal Type</TableHead>
                    <TableHead className="font-semibold text-foreground text-right">Dosage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dosage.map((item, index) => (
                    <TableRow 
                      key={index} 
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <TableCell className="font-medium text-foreground">
                        {item.animal}
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {item.dose}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          ) : (
            /* Simple Text Dosage */
            <div className="p-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Recommended Dosage</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {dosage}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Administration Guidelines */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-card rounded-lg p-4 border border-border/50">
            <h5 className="font-medium mb-3 text-foreground">Administration Guidelines:</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Maintain consistent timing for optimal results
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Complete the full course as prescribed
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Do not exceed recommended dosage
              </li>
            </ul>
          </div>
          <div className="bg-gradient-card rounded-lg p-4 border border-border/50">
            <h5 className="font-medium mb-3 text-foreground">Important Notes:</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Always consult a physician/veterinarian
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Adjust dosage based on severity if advised
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Monitor for any adverse reactions
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
