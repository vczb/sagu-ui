import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Skeleton, { SkeletonProps, SkeletonVariant } from '.'

export default {
  title: 'Skeleton',
  component: Skeleton,
  args: {}
} as Meta

export const Text: StoryFn<SkeletonProps> = (args) => {
  return (
    <div>
      Skeleton Text
      <Skeleton {...args} variant={SkeletonVariant.TEXT} fontSize="5rem">
        <p>Skeleton Text</p>
      </Skeleton>
      Skeleton Text with Width
      <Skeleton {...args} variant={SkeletonVariant.TEXT} width={70}>
        <p>Skeleton Text with Width</p>
      </Skeleton>
      Skeleton Text with Height
      <Skeleton {...args} variant={SkeletonVariant.TEXT} height={50}>
        <p>Skeleton Text with Height</p>
      </Skeleton>
      Skeleton Text with Width and Height
      <Skeleton
        {...args}
        variant={SkeletonVariant.TEXT}
        width={100}
        height={30}
      >
        <p>Skeleton Text with Width and Height</p>
      </Skeleton>
    </div>
  )
}

export const Circular: StoryFn<SkeletonProps> = (args) => {
  return (
    <div>
      Skeleton Circular with an 150x150 image inside
      <Skeleton {...args} variant={SkeletonVariant.CIRCULAR}>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
      </Skeleton>
      Skeleton Circular with Width and Height
      <Skeleton
        {...args}
        variant={SkeletonVariant.CIRCULAR}
        width={100}
        height={100}
      >
        <p>Skeleton Circular with Width and Height</p>
      </Skeleton>
    </div>
  )
}

export const Rectangular: StoryFn<SkeletonProps> = (args) => {
  return (
    <div>
      Skeleton Rectangular
      <Skeleton {...args} variant={SkeletonVariant.RECTANGULAR}>
        <p>Skeleton Rectangular</p>
      </Skeleton>
      Skeleton Rectangular with Width
      <Skeleton {...args} variant={SkeletonVariant.RECTANGULAR} width={170}>
        <p>Skeleton Rectangular with Width</p>
      </Skeleton>
      Skeleton Rectangular with Height
      <Skeleton {...args} variant={SkeletonVariant.RECTANGULAR} height={50}>
        <p>Skeleton Rectangular with Height</p>
      </Skeleton>
      Skeleton Rectangular with Width and Height
      <Skeleton
        {...args}
        variant={SkeletonVariant.RECTANGULAR}
        width={300}
        height={30}
      >
        <p>Skeleton Rectangular with Width and Height</p>
      </Skeleton>
      Skeleton Rectangular with an 150x100 image inside
      <Skeleton {...args} variant={SkeletonVariant.ROUNDED}>
        <img src="https://via.placeholder.com/150x100" alt="placeholder" />
      </Skeleton>
    </div>
  )
}

export const Rounded: StoryFn<SkeletonProps> = (args) => {
  return (
    <div>
      Skeleton Rounded
      <Skeleton {...args} variant={SkeletonVariant.ROUNDED}>
        <p>Skeleton Rounded</p>
      </Skeleton>
      Skeleton Rounded with Width
      <Skeleton {...args} variant={SkeletonVariant.ROUNDED} width={70}>
        <p>Skeleton Rounded with Width</p>
      </Skeleton>
      Skeleton Rounded with Height
      <Skeleton {...args} variant={SkeletonVariant.ROUNDED} height={50}>
        <p>Skeleton Rounded with Height</p>
      </Skeleton>
      Skeleton Rounded with Width and Height
      <Skeleton
        {...args}
        variant={SkeletonVariant.ROUNDED}
        width={100}
        height={30}
      >
        <p>Skeleton Rounded with Width and Height</p>
      </Skeleton>
      Skeleton Rounded with an 150x150 image inside
      <Skeleton {...args} variant={SkeletonVariant.ROUNDED}>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
      </Skeleton>
    </div>
  )
}
