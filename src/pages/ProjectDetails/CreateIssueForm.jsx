import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { useForm } from 'react-hook-form'
import { tags } from '../ProjectList/ProjectList'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useDispatch } from 'react-redux'
import { createIssue } from '@/Redux/Issue/Action'
import { useParams } from 'react-router-dom'

const CreateIssueForm = ({status}) => {
    const {id} = useParams();
    const dispatch = useDispatch();
  const form = useForm({
    // resolver: zod
    defaultValues: {
        issueName: "",
        description: ""
    },
})

const onSubmit = (data) => {
    data.projectId = id;

    dispatch(createIssue({
        title: data.issueName, 
        description: data.description, 
        projectId: id,
        status,
    }))
    console.log("create issue data:", data);
};
    

  return (
    <div>
      <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="issueName"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type="text"
                                    className="border w-full bordergray-700 py-5 px-5"
                                    placeholder="Tên nhiệm vụ ..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />
                    <FormField control={form.control}
                        name="description"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type="text"
                                    className="border w-full bordergray-700 py-5 px-5"
                                    placeholder="Mô tả ..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />
                    
                    <DialogClose>
                        <Button type="submit" className="w-full mt-5 ">
                            Thêm
                            </Button>
                    </DialogClose>
                </form>
            </Form>
    </div>
  )
}

export default CreateIssueForm