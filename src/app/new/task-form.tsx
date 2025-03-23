import * as React from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createTask, updateTask } from "@/actions/task-actions"
import { Task } from ".prisma/client"
import Link from "next/link"


export function TaskForm({task}: {task: Task}) {


  const functionAction = task?.id ? updateTask : createTask;
 

  return (
    <form action={functionAction}>
      <input type="hidden" 
      name="id"
      value={task?.id}
      />
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Crea una nueva tarea</CardTitle>
        <CardDescription>Ingresa los datos de tu tarea</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full  items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nombre de la tarea</Label>
              <Input name="name" id="name" placeholder="Ingresa el nombre de tu tarea" 
              defaultValue={task?.name}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Descripción de la tarea</Label>
              <Textarea name="description"
                id="description"
                placeholder="Ingresa la descripción de tu tarea"
                defaultValue={task?.description ?? ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Prioriedad</Label>
              <Select name="priority" defaultValue={task?.priority ?? ""}>
                <SelectTrigger id="priority" className="w-full">
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Baja</SelectItem>
                  <SelectItem value="medium">Mediana</SelectItem>
                  <SelectItem value="urgent">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/"
          className={buttonVariants({variant: "secondary"})}>
            Cancelar
        </Link>
        <Button type="submit">
          {task?.id ? "Actualizar tarea" : "Crear tarea"}
        </Button>
      </CardFooter>
    </Card>
    </form>
  )
}
