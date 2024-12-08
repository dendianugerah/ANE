import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs"

const MedicalPreviewSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title and description skeletons */}
      <Skeleton className="h-8 w-72 mx-auto mb-4" />
      <Skeleton className="h-20 w-full mb-6" />

      {/* Tabs skeleton */}
      <div className="mb-6">
        <Tabs>

        <TabsList className="w-full sm:max-w-sm md:max-w-lg lg:max-w-lg px-2">
          {[...Array(5)].map((_, i) => (
            <TabsTrigger value={`tab-${i}`} key={i} disabled>
              <Skeleton className="h-4 w-20" />
            </TabsTrigger>
          ))}
        </TabsList>
        </Tabs>
      </div>

      {/* Grid of skeleton cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  )
}

const SkeletonCard = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-16 w-full mb-4" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-32" />
      </CardFooter>
    </Card>
  )
}

export default MedicalPreviewSkeleton 