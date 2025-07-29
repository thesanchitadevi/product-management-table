"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"

type TEditableCell = {
  value: string | number
  onUpdate: (value: string | number) => void
  className?: string
}

export function EditableCell({ value: initialValue, onUpdate, className = "" }: TEditableCell) {
  const [value, setValue] = useState(initialValue)
  const [isEditing, setIsEditing] = useState(false) // editing state
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const saveChanges = () => {
    if (value !== initialValue) onUpdate(value)
    setIsEditing(false)
  }

  const cancelEdit = () => {
    setValue(initialValue)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") saveChanges() // Save on Enter
    if (e.key === "Escape") cancelEdit() // Cancel on Escape
  }

  return (
    <div className={`flex min-h-10 items-center ${className}`} onClick={() => setIsEditing(true)}>
      {isEditing ? (
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={saveChanges}
          onKeyDown={handleKeyDown}
          className="h-8 w-full"
        />
      ) : (
        <div className="w-full truncate px-3 py-2">{value}</div>
      )}
    </div>
  )
}
