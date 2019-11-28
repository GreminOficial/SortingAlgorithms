# Heap Sort algorithm by GremDev
# https://github.com/GreminOficial




def bubbleSort(arr):

    comparations = 1

    n = len(arr)

    # Traverse through all array elements
    for i in range(n):

        # Last i elements are already in place
        for j in range(0, n-i-1):

            # traverse the array from 0 to n-i-1
            # Swap if the element found is greater
            # than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
            comparations += 1
            print("Acabo de comparar")
    
    return arr, comparations


arr = [64, 34, 25, 12, 22, 11, 90,45,43,265,13,154,23,3,2,1]

arr, comparations = bubbleSort(arr)

print(arr)
print("Comparatios made: ", comparations)

